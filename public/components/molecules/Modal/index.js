import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
export function Modal({ children, onClose }) {
    return (_jsx(Transition.Root, Object.assign({ show: true, as: Fragment }, { children: _jsxs(Dialog, Object.assign({ as: "div", className: "relative z-10", onClose: onClose }, { children: [_jsx(Transition.Child, Object.assign({ as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: _jsx("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }) })), _jsx("div", Object.assign({ className: "fixed inset-0 z-10 overflow-y-auto" }, { children: _jsx("div", Object.assign({ className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, { children: _jsx(Transition.Child, Object.assign({ as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }, { children: _jsxs(Dialog.Panel, Object.assign({ className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6" }, { children: [_jsx("div", Object.assign({ className: "absolute right-0 top-0 hidden pr-4 pt-4 sm:block" }, { children: _jsxs("button", Object.assign({ type: "button", className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", onClick: onClose }, { children: [_jsx("span", Object.assign({ className: "sr-only" }, { children: "Close" })), _jsx(XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" })] })) })), _jsxs("div", Object.assign({ className: "sm:flex sm:items-center m-10 flex-col" }, { children: [_jsx("p", Object.assign({ className: "mb-16 font-bold" }, { children: "Scan with PolygonID" })), children] }))] })) })) })) }))] })) })));
}