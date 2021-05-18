using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBlueButtonAPI.Core;
using Microsoft.AspNetCore.Authorization;

namespace eee_example_api.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class MeetingController : ControllerBase
    {
        private readonly BigBlueButtonAPIClient _client;

        public MeetingController(
            BigBlueButtonAPIClient client
        )
        {
            _client = client;
        }

        #region Actions

        [HttpGet]
        public async Task<ActionResult> GetMeetingList()
        {
            var setupOk = await IsBigBlueButtonApiSettingsOkAsync();
            if (setupOk)
            {
                var result = await _client.GetMeetingsAsync();
                return Ok(result);
            }

            return Ok("Error");
        }

        [HttpPost]
        public async Task<ActionResult> Create(CreateMeetingRequest model)
        {
            if (model.name == string.Empty || model.meetingID == string.Empty)
            {
                return BadRequest(new {message = "مقادیر را وارد کنید."});
            }

            var result = await _client.CreateMeetingAsync(new CreateMeetingRequest
            {
                name = model.name ?? "Test Meeting",
                meetingID = model.meetingID ?? "TestMeeting001",
                record = model.record ?? true,
                autoStartRecording = model.autoStartRecording ?? false,

                allowStartStopRecording = model.allowStartStopRecording ?? false,
                webcamsOnlyForModerator = model.webcamsOnlyForModerator ?? false,
                muteOnStart = model.muteOnStart ?? false,
                allowModsToUnmuteUsers = model.allowModsToUnmuteUsers ?? true,
                lockSettingsDisableCam = model.lockSettingsDisableCam ?? false,
                lockSettingsDisableMic = model.lockSettingsDisableMic ?? false,
            });
            if (result.returncode == Returncode.FAILED) return BadRequest(result);
            return Ok(result);
        }


        [HttpPost]
        public async Task<ActionResult> Join([FromQuery] string meetingID, [FromQuery] string role,
            [FromQuery] string pass,
            [FromQuery] string token)
        {
            var requestJoin = new JoinMeetingRequest {meetingID = meetingID};
            if (role == "1")
            {
                requestJoin.password = pass;
                requestJoin.userID = "10000";
                requestJoin.fullName = "Admin";
            }
            else
            {
                requestJoin.password = pass;
                requestJoin.userID = "20000";
                requestJoin.fullName = "User";
            }

            if (token == "1")
            {
                var setConfigRequest = new SetConfigXMLRequest
                {
                    meetingID = meetingID,
                    configXML =
                        "<config><modules><localeversion supressWarning=\"false\">0.9.0</localeversion></modules></config>"
                };
                var setConfigResult = await _client.SetConfigXMLAsync(setConfigRequest);
                if (setConfigResult.returncode == Returncode.FAILED)
                    return BadRequest(setConfigResult);
                requestJoin.configToken = setConfigResult.configToken;
            }

            var url = _client.GetJoinMeetingUrl(requestJoin);

            var re = Redirect(url);

            return Ok(new {url = re});
        }


        public async Task<ActionResult> End(string meetingID, string pass)
        {
            var result = await _client.EndMeetingAsync(new EndMeetingRequest
            {
                meetingID = meetingID,
                password = pass
            });
            if (result.returncode == Returncode.FAILED) return BadRequest(result);
            return Ok(result);
        }

        #endregion


        #region متد ها

        /// <summary>
        /// It ensures the settings of BigBlueButton is ok. 
        /// It just helps you run the demo normally. In product environment, this method is not needed.
        /// </summary>
        /// <returns></returns>
        private async Task<bool> IsBigBlueButtonApiSettingsOkAsync()
        {
            try
            {
                var res = await _client.IsMeetingRunningAsync(new IsMeetingRunningRequest
                    {meetingID = Guid.NewGuid().ToString()});
                if (res.returncode == Returncode.FAILED) return false;
                return true;
            }
            catch
            {
                return false;
            }
        }

        #endregion
    }
}