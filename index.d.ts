import { Router, Application } from "express";

declare const controller: (path?: string) => ClassDecorator

declare const route: (method: string, path?: string) => MethodDecorator
declare const middleware: (fn: Function|string) => MethodDecorator
declare const use: MethodDecorator

declare const all: (path?: string) => MethodDecorator
declare const checkout: (path?: string) => MethodDecorator
declare const connect: (path?: string) => MethodDecorator
declare const copy: (path?: string) => MethodDecorator
declare const deleteM: (path?: string) => MethodDecorator
declare const get: (path?: string) => MethodDecorator
declare const head: (path?: string) => MethodDecorator
declare const lock: (path?: string) => MethodDecorator
declare const merge: (path?: string) => MethodDecorator
declare const mkactivity: (path?: string) => MethodDecorator
declare const mkcol: (path?: string) => MethodDecorator
declare const move: (path?: string) => MethodDecorator
declare const msearch: (path?: string) => MethodDecorator
declare const notify: (path?: string) => MethodDecorator
declare const options: (path?: string) => MethodDecorator
declare const param: (path?: string) => MethodDecorator
declare const patch: (path?: string) => MethodDecorator
declare const post: (path?: string) => MethodDecorator
declare const propfind: (path?: string) => MethodDecorator
declare const proppatch: (path?: string) => MethodDecorator
declare const purge: (path?: string) => MethodDecorator
declare const put: (path?: string) => MethodDecorator
declare const report: (path?: string) => MethodDecorator
declare const search: (path?: string) => MethodDecorator
declare const subscribe: (path?: string) => MethodDecorator
declare const trace: (path?: string) => MethodDecorator
declare const unlock: (path?: string) => MethodDecorator
declare const unsubscribe: (path?: string) => MethodDecorator

declare const register: (app: Router|Application, any) => void

export {
  controller,

  route, middleware, use,

  all, checkout, connect, copy, deleteM as delete, get, head, lock, merge, mkactivity, mkcol, move,
  /*msearch as "m-search",*/ notify, options, param, patch, post, propfind, proppatch, purge, put, report,
  search, subscribe, trace, unlock, unsubscribe,

  register
}