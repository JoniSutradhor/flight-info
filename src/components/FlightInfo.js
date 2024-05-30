import React from "react";
import flightIcon from "../assets/flight-icon.png";
import locationBlue from "../assets/location-blue.png";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";

const FlightInfo = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md max-w-3xl mx-auto">
      <div className="flex justify-between mb-5">
        <div className="text-sm text-gray-600">
          Home {">"} Booking History {">"} Flight {">"}{" "}
          <strong>STFL17121182045413</strong>
        </div>
      </div>
      <div className="border-t pt-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center mb-5">
            <div>
              <p className="flex items-center justify-center text-sm bg-[#1882FF] text-white h-[24px] w-[24px] rounded-full ">
                1
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1A2B3D]">DAC → JFK</h1>
              <div className="text-sm text-[#5A6573]">
                Round Trip • 25 Mar - 4 Apr 2023 • 1 Stop
              </div>
            </div>
          </div>
          <div className="flex items-center text-sm bg-[#E8F3FF] text-[#1882FF] px-3 py-1 rounded-full">
            <div>33h 20m</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center">
            <img src={flightIcon} alt="departure" className="h-6 mr-2" />
          </div>
          <div className="flex justify-between gap-2 bg-gray-100 p-3 rounded-lg w-full">
            <div className="text-sm text-[#1A2B3D]">Departure from Dhaka</div>
            <div className="text-[#5A6573]">
              <span className="text-[#5A6573]">Terminal 1: </span>Hazrat
              Shahjalal International Airport
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex justify-between p-3 rounded-lg">
            <div className="flex flex-col">
              <div>
                <div className="font-bold">DAC - DXB</div>
                <div className="text-sm text-gray-500">12 hr 20 min</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Turkish Airlines</div>
                <div className="text-sm text-gray-600">Flight no : TUR467</div>
              </div>
              {/* <div className="text-sm text-gray-600">Class : ECONOMY-Y (O)</div> */}
            </div>
            <div className="flex flex-col">
              <div>
                <div className="font-bold">07:30 PM</div>
                <div className="text-sm text-gray-500">28 Mar, Friday</div>
              </div>
              <div>
                <div className="text-sm font-semibold">
                  Airbus Industrie 737-800-738
                </div>
                <div className="text-sm text-gray-600">
                  Class : ECONOMY-Y (O)
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <div className="font-bold">08:50 AM</div>
                <div className="text-sm text-gray-500">29 Mar, Saturday</div>
              </div>
              {/* <div>
                <div className="text-sm font-semibold">Airbus Industrie 737-800-738</div>
                <div className="text-sm text-gray-600">Class : ECONOMY-Y (O)</div>
              </div> */}
            </div>
          </div>
          <div className="flex gap-2 bg-orange-100 rounded-lg p-2">
            <div className="flex items-center">
            <ErrorOutlinedIcon className="text-[#F27D00]"/>
            </div>
            <div className="text-sm text-[#3E4957]">
              Technical stoppage at Malpensa International Airport (Milano).
              Before booking this flight please check your visa requirements as
              per your nationality.
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center">
            <img src={flightIcon} alt="departure" className="h-6 mr-2" />
          </div>
          <div className="flex justify-between gap-2 bg-[#E8F3FF] p-3 rounded-lg w-full">
            <div className="text-sm text-[#1A2B3D]">
              Layover at Dubai: 12 hr 20 min
            </div>
            <div className="text-[#5A6573]">Dubai International Airport</div>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex justify-between p-3 rounded-lg">
            <div className="flex flex-col">
              <div>
                <div className="font-bold">DAC - DXB</div>
                <div className="text-sm text-gray-500">12 hr 20 min</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Turkish Airlines</div>
                <div className="text-sm text-gray-600">Flight no : TUR467</div>
              </div>
              {/* <div className="text-sm text-gray-600">Class : ECONOMY-Y (O)</div> */}
            </div>
            <div className="flex flex-col">
              <div>
                <div className="font-bold">07:30 PM</div>
                <div className="text-sm text-gray-500">28 Mar, Friday</div>
              </div>
              <div>
                <div className="text-sm font-semibold">
                  Airbus Industrie 737-800-738
                </div>
                <div className="text-sm text-gray-600">
                  Class : ECONOMY-Y (O)
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <div className="font-bold">08:50 AM</div>
                <div className="text-sm text-gray-500">29 Mar, Saturday</div>
              </div>
              {/* <div>
                <div className="text-sm font-semibold">Airbus Industrie 737-800-738</div>
                <div className="text-sm text-gray-600">Class : ECONOMY-Y (O)</div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center">
            <img src={locationBlue} alt="departure" className="h-6 mr-2" />
          </div>
          <div className="flex justify-between gap-2 bg-gray-100 p-3 rounded-lg w-full">
            <div className="text-sm text-[#1A2B3D]">
              Destination at New York
            </div>
            <div className="text-[#5A6573]">
              <span className="text-[#5A6573]">Terminal 4: </span>John F Kennedy
              International Airport
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
