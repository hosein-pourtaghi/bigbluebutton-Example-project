using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBlueButtonAPI.Core;

namespace eee_example_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordingController : ControllerBase
    {
        private readonly BigBlueButtonAPIClient _client;

        public RecordingController(
            BigBlueButtonAPIClient client)
        {
            _client = client;
        }

        [HttpGet]
        public async Task<ActionResult> GetRecordings()
        {
            var setupOk = await IsBigBlueButtonApiSettingsOkAsync();
            if (setupOk)
            {
                var result = await _client.GetRecordingsAsync();
                return Ok(result);
            }

            return Ok("error");
        }

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
                    { meetingID = Guid.NewGuid().ToString() });
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