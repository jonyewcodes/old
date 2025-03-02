"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CustomizedTimeline() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            1 March 2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "#5a96d9" }} />
            <motion.div variants={fadeInUp}>
              <TimelineDot sx={{ backgroundColor: "#64c6fb", color: "white" }}>
                <HowToRegIcon fontSize="large" />
              </TimelineDot>
            </motion.div>
            <TimelineConnector sx={{ bgcolor: "#5a96d9" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "64px", px: 2 }}>
            <Typography variant="h6" component="span">
              Registration Opens
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>09:00 AM</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            4 July 2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "#5a96d9" }} />
            <motion.div variants={fadeInUp}>
              <TimelineDot sx={{ backgroundColor: "#5a96d9", color: "white" }}>
                <EventBusyIcon fontSize="large" />
              </TimelineDot>
            </motion.div>
            <TimelineConnector sx={{ bgcolor: "#5a96d9" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "64px", px: 2 }}>
            <Typography variant="h6" component="span">
              Registration Closes
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>23:59 PM</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            26 July 2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "#5a96d9" }} />
            <motion.div variants={fadeInUp}>
              <TimelineDot sx={{ backgroundColor: "#5073b1", color: "white" }}>
                <EmojiEventsIcon fontSize="large" />
              </TimelineDot>
            </motion.div>
            <TimelineConnector sx={{ bgcolor: "#5a96d9" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "64px", px: 2 }}>
            <Typography variant="h6" component="span">
              Contest Date
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>09:00 AM</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </motion.div>
  );
}