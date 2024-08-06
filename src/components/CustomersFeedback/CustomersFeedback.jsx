import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Rating,
  Divider,
} from "@mui/material";

// const feedbacks = [
//   {
//     customer: "Jenny Wilson",
//     rating: 5,
//     feedback:
//       "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
//     avatar: "https://randomuser.me/api/portraits/women/7.jpg",
//   },
//   {
//     customer: "Dianne Russell",
//     rating: 4,
//     feedback:
//       "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
//     avatar: "https://randomuser.me/api/portraits/women/8.jpg",
//   },
//   {
//     customer: "Devon Lane",
//     rating: 5,
//     feedback:
//       "Normally wings are wings, but theirs are lean meaty and tender, and are tasty as can be. It would have been my bad luck if I had not experienced this.",
//     avatar: "https://randomuser.me/api/portraits/men/9.jpg",
//   },
// ];

const feedbacks = [
  {
    customer: "Jenny Wilson",
    rating: 5,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    customer: "Dianne Russell",
    rating: 4,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    customer: "Devon Lane",
    rating: 5,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and are tasty as can be.",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    customer: "Ronald Richards",
    rating: 3,
    feedback: "Good service but the food was average.",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    customer: "Courtney Henry",
    rating: 5,
    feedback: "Absolutely wonderful experience!",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    customer: "Camille O'Conner",
    rating: 4,
    feedback: "Great place for a quick bite.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    customer: "Esther Howard",
    rating: 2,
    feedback: "Not satisfied with the service.",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    customer: "Ralph Edwards",
    rating: 5,
    feedback: "Amazing food and staff!",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

const CustomerFeedback = () => {
  return (
    <Card
      sx={{
        bgcolor: "#1e1e2d",
        color: "white",
        m: 2,
        borderRadius: "20px",
        fontFamily: "Poppins",
        height: "573.5px",
        overflowX: "hidden",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily: "Poppins",
            textAlign: "left",
            marginBottom: "1rem",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          Customer's Feedback
        </Typography>
        <Box
          sx={{
            bgcolor: "#1e1e2d",
            color: "white",
            borderRadius: "20px",
            fontFamily: "Poppins",
            height: "573px",
            overflowX: "hidden",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#1e1e2d",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "20px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          <Grid container spacing={2}>
            {feedbacks.map((feedback, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <Avatar
                    src={feedback.avatar}
                    alt={feedback.customer}
                    sx={{ mr: 2 }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      color="white"
                      sx={{ fontFamily: "Poppins", fontSize: "1.1rem" }}
                    >
                      {feedback.customer}
                    </Typography>
                    <Rating
                      value={feedback.rating}
                      readOnly
                      sx={{ fontSize: "1.2rem" }}
                    />
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{ fontFamily: "Poppins", fontSize: ".7rem" }}
                    >
                      {feedback.feedback}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomerFeedback;
