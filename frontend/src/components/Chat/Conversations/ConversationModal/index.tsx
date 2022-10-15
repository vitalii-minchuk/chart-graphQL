import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import { Dispatch, SetStateAction } from "react";

interface IConversationModalProps {
  open: boolean;
  onClose: () => void;
}

function ConversationModal({ open, onClose }: IConversationModalProps) {
  return (
    <>
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>hrllo</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConversationModal;
