import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { LightBulbIcon } from '@heroicons/react/24/outline'


export default function DiagnosisModal() {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md mx-auto">
                <div className="flex flex-col items-center justify-center bg-white px-4 pb-4 pt-5">
                  <div className="flex items-center justify-center mt-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10">
                      <LightBulbIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-3">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 ml-4">
                      Diagnóstico: Trastorno de fobia social
                    </Dialog.Title>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm text-gray-500">
                      Se caracteriza por un miedo intenso o ansiedad en situaciones sociales donde existe la posibilidad de ser juzgado o avergonzado por los demás.
                      Los síntomas clave incluyen:
                      Temor persistente a ser humillado, avergonzado o evaluado negativamente.
                      Evitación o malestar significativo en situaciones sociales.
                      Dificultades para establecer o mantener relaciones sociales.
                      Ansiedad anticipatoria antes de las situaciones sociales.
                      Reconocimiento de que el miedo es excesivo o irracional.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    OK
                  </button>
                </div>
              </Dialog.Panel>


            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
