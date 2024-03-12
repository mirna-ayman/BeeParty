import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const Mission = () => {
    return (
      <div className="w-[32rem]">
        <Timeline className="text-[#FEBF05] ">
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-[#FEBF05]" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none text-[#FEBF05]"
              >
                Birthday Bliss
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                Our mission is to create moments of pure joy, making every
                birthday celebration a blissful memory to cherish.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-[#FEBF05]" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none text-[#FEBF05]"
              >
                Imaginative Creations
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                We are committed to crafting imaginative and unforgettable
                birthday experiences that ignite the imagination of children and
                parents alike.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-[#FEBF05]" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none text-[#FEBF05]"
              >
                Stress-Free Celebrations
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                We strive to take the stress out of birthday planning, so
                parents can relax and enjoy the celebration with their little
                ones.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
};

export default Mission;