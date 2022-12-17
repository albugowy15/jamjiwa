import type { NextPage } from "next";
import { Button as MuiButton } from "@mui/material";
import {
  Stack,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
  Textarea,
  Menu as ChakraMenu,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type Modal3PopupType = {
  onClose?: () => void;
};

const Modal3Popup: NextPage<Modal3PopupType> = ({ onClose }) => {
  return (
    <div className="relative rounded-[24px] bg-gray-700 w-[658px] h-[689px] flex flex-col p-[40px] box-border items-center justify-start gap-[32px] max-w-full max-h-full overflow-auto sm:p-[20px] sm:box-border">
      <div
        className="self-stretch h-[24px] shrink-0 flex flex-col items-end justify-start cursor-pointer"
        onClick={onClose}
      >
        <img
          className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
          alt=""
          src="../x.svg"
          onClick={onClose}
        />
      </div>
      <div className="self-stretch relative rounded-[12px] [border:2px_solid_#fff] box-border h-[204px] shrink-0 overflow-hidden">
        <audio
          className="absolute h-[11.76%] w-[4.12%] top-[76.96%] right-[91.58%] bottom-[11.27%] left-[4.3%]"
          controls
        >
          <source src="../8_letters  why dont we.m4a" />
        </audio>
        <Stack className="absolute top-[157px] left-[404px]">
          <Menu>
            <MenuButton
              w="149px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="teal"
            >
              Dropdown
            </MenuButton>
            <MenuList>
              <MenuItem value="tes">tes</MenuItem>
              <MenuItem value="tes">tes</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Textarea
          className="absolute top-[13px] left-[18px]"
          variant="filled"
          w="542px"
          placeholder="Sugeng Enjing |"
          isRequired
        />
      </div>
      <MuiButton className="self-stretch" variant="contained" color="primary">
        Translate!
      </MuiButton>
      <div className="self-stretch relative rounded-[12px] [border:2px_solid_#fff] box-border h-[200px] shrink-0 overflow-hidden">
        <audio
          className="absolute h-[12%] w-[4.15%] top-[78.5%] right-[91.52%] bottom-[9.5%] left-[4.33%]"
          controls
        >
          <source src="../8_letters  why dont we.m4a1" />
        </audio>
        <Stack className="absolute top-[157px] left-[424px]">
          <ChakraMenu>
            <MenuButton
              w="129px"
              as={ChakraButton}
              rightIcon={<ChevronDownIcon />}
              colorScheme="teal"
            >
              Dropdown
            </MenuButton>
            <MenuList>
              <MenuItem value="tes">tes</MenuItem>
              <MenuItem value="tes">tes</MenuItem>
            </MenuList>
          </ChakraMenu>
        </Stack>
        <Textarea
          className="absolute top-[16px] left-[18px]"
          variant="filled"
          w="542px"
          placeholder="Selamat Pagi"
          isRequired
        />
      </div>
    </div>
  );
};

export default Modal3Popup;
