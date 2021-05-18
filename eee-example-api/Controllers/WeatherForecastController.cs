using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging; 
using System.Threading.Tasks;
using BigBlueButtonAPI.Core;

namespace eee_example_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly BigBlueButtonAPIClient _client;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, BigBlueButtonAPIClient client)
        {
            _logger = logger;
            _client = client;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        } 

        // [HttpGet]
       // public async Task<ActionResult> Get()
        // {
            // var result = await _client.CreateMeetingAsync(new CreateMeetingRequest
            // {
            //     name = "Test Meeting",
            //     meetingID = "TestMeeting001",
            //     record = true
            // });
            // if (result.returncode == Returncode.FAILED) return Ok("Error");
            // return Ok(result);
        // }
    }
}
