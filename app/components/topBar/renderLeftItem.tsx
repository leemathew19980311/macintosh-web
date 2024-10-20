"use client";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TopBarLeftItem } from "./config";
import Image from "next/image";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

const RenderLeftItem: React.FC<{ item: TopBarLeftItem }> = ({ item }) => {
  const { icon, text, children } = item;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {icon && (
        <IconButton
          aria-label={icon.alt}
          className="h-6 hover:bg-transparent"
          onClick={handleClick}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
          />
        </IconButton>
      )}
      {text && (
        <Button
          className="cursor-default normal-case h-6"
          color="inherit"
          onClick={handleClick}
        >
          {text}
        </Button>
      )}
      <Paper elevation={8}>
        <Menu
          open={open}
          anchorEl={anchorEl}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "transparent",
              //   backdropFilter: "contrast(.5)",
              backdropFilter: "rgba(22, 22, 23, .8)",
              //   backdropFilter: "blur(64px)",
            },
          }}
          onClose={handleClose}
        >
          {children?.length &&
            children.map((child, index) => (
              <MenuItem
                className="backdrop-blur-3xl"
                onClick={handleClose}
                key={`${child.eventMessage}-${index}`}
              >
                {child.divider ? <Divider variant="middle" /> : child.text}
              </MenuItem>
            ))}
        </Menu>
      </Paper>
    </>
  );
};

export default RenderLeftItem;
