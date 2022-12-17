import type { NextPage } from "next";
import { useState, useCallback } from "react";
import {
  Stack,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Modal3Popup from "../components/modal3-popup";
import PortalPopup from "../components/portal-popup";

type Modal1PopupType = {
  onClose?: () => void;
};

const Modal1Popup: NextPage<Modal1PopupType> = ({ onClose }) => {
  const [isModal3PopupOpen, setModal3PopupOpen] = useState(false);

  const openModal3Popup = useCallback(() => {
    setModal3PopupOpen(true);
  }, []);

  const closeModal3Popup = useCallback(() => {
    setModal3PopupOpen(false);
  }, []);

  return (
    <>
      <div className="relative rounded-[24px] bg-gray-900 h-[815px] flex flex-col p-[69px_56px] box-border items-start justify-start gap-[32px] max-w-full max-h-full overflow-auto text-left text-base text-white-200 font-inter sm:p-[33px_28px] sm:box-border">
        <div className="relative w-[859px] h-[408px] shrink-0">
          <Stack className="absolute top-[88px] left-[0px]">
            <Menu>
              <MenuButton
                w="859px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="teal"
              >
                Daily Conversation
              </MenuButton>
              <MenuList>
                <MenuItem value="tes">tes</MenuItem>
                <MenuItem value="tes">tes</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Stack className="absolute top-[0px] left-[0px]">
            <Menu>
              <MenuButton
                w="859px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="teal"
              >
                Greetings
              </MenuButton>
              <MenuList>
                <MenuItem value="tes-----------------------------------------------------------------------------------------------------------tes">
                  tes-----------------------------------------------------------------------------------------------------------tes
                </MenuItem>
                <MenuItem value="tes">tes</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Stack className="absolute top-[88px] left-[0px]">
            <Menu>
              <MenuButton
                w="859px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="teal"
              >
                Daily Conversation
              </MenuButton>
              <MenuList>
                <MenuItem value="tes-----------------------------------------------------------------------------------------------------------tes">
                  tes-----------------------------------------------------------------------------------------------------------tes
                </MenuItem>
                <MenuItem value="tes">tes</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Stack className="absolute top-[176px] left-[0px]">
            <Menu>
              <MenuButton
                w="859px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="teal"
              >
                Asking for Helps
              </MenuButton>
              <MenuList>
                <MenuItem value="tes-----------------------------------------------------------------------------------------------------------tes">
                  tes-----------------------------------------------------------------------------------------------------------tes
                </MenuItem>
                <MenuItem value="tes">tes</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Stack className="absolute top-[264px] left-[0px]">
            <Menu>
              <MenuButton
                w="859px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="teal"
              >
                Thank You
              </MenuButton>
              <MenuList>
                <MenuItem value="tes-----------------------------------------------------------------------------------------------------------tes">
                  tes-----------------------------------------------------------------------------------------------------------tes
                </MenuItem>
                <MenuItem value="tes">tes</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Stack className="absolute top-[352px] left-[0px]">
            <Menu>
              <MenuButton
                w="859px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="teal"
              >
                Unieque Phrase or Vocabulary
              </MenuButton>
              <MenuList>
                <MenuItem value="tes-----------------------------------------------------------------------------------------------------------tes">
                  tes-----------------------------------------------------------------------------------------------------------tes
                </MenuItem>
                <MenuItem value="tes">tes</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </div>
        <div
          className="rounded-[12px] [background:linear-gradient(180deg,_#5561ff,_#3643fc,_#3643fc)] w-[186px] flex flex-row p-[12px_32px] box-border items-center justify-center cursor-pointer"
          onClick={openModal3Popup}
        >
          <div className="relative tracking-[-0.05em] leading-[24px] font-semibold inline-block">
            Explore Now!
          </div>
        </div>
      </div>
      {isModal3PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModal3Popup}
        >
          <Modal3Popup onClose={closeModal3Popup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Modal1Popup;
