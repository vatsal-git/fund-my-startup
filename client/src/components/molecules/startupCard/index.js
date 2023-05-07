import React, { useState } from "react";

import ImageBox from "../../commons/imageBox";
import ViewStartupModal from "../../modals/viewStartupModal";
import { formatNumberWithSuffix } from "../../../utils/commonFunctions";

import "./index.css";
import {
  Typography,
  Button,
  Box,
  Chip,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const StartupCard = ({ startup, modifyActions }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className="startup-card-container">
      <Box className="startup-card">
        <Box className="startup-card-content">
          <ImageBox
            src={startup.featuredImage}
            height="10em"
            width="100%"
            mb={2}
          />
          <Box mb={2}>
            <Typography variant="h6" component="h2" textOverflow="clip">
              {startup.name}
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" component="p">
            {startup.description.slice(0, 100) + "..."}
          </Typography>
          <Box display="flex" alignItems="start" flexWrap="wrap" gap={1} mt={2}>
            <Chip label={startup.location} variant="outlined" />
            <Chip label={startup.industry} variant="outlined" />
            <Chip
              label={formatNumberWithSuffix(startup.funding) + "$"}
              variant="outlined"
            />
            <br />
            <Chip label={startup.tags[0]} variant="outlined" />
            <Chip
              icon={<PersonIcon fontSize="small" />}
              label={startup.createdBy.name}
              variant="outlined"
            />
          </Box>
        </Box>
        <Box className="startup-card-actions">
          <Button variant="outlined" onClick={handleOpen}>
            View Details
          </Button>
          <ViewStartupModal
            open={open}
            handleClose={handleClose}
            startup={startup}
            enableChat={false}
          />
          {modifyActions && (
            <Box>
              <IconButton onClick={() => modifyActions?.handleEdit(startup)}>
                <EditOutlinedIcon />
              </IconButton>
              <IconButton onClick={() => modifyActions?.handleDelete(startup)}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default StartupCard;
