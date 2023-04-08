import React, {Fragment} from 'react'

import { Dialog, Transition } from "@headlessui/react";
import { VisualButtons } from "..";

interface ImageModalProps {
  visualInfo: any;
  handleClose: () => void;
}

const ImageModal = ({ visualInfo, handleClose}: ImageModalProps) => {
  return (
    <Transition appear show={visualInfo ? true : false} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="fixed z-20 flex flex-col gap-4 p-4 md:max-w-[70vw] ">
                <img
                  src={visualInfo?.imageURL}
                  alt={visualInfo?.image_name}
                  className="xs:max-h-[85vh] rounded-2xl"
                />

            
                {visualInfo ? <VisualButtons visualInfo={visualInfo}/> : null}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ImageModal