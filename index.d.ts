import { Router, Application} from "express";

const controller: (path: string) => ClassDecorator

const route: (method: string, path: string) => MethodDecorator
const middleware: (fn: Function|string) => MethodDecorator
const use: MethodDecorator

const all: (path: string) => MethodDecorator
const checkout: (path: string) => MethodDecorator
const connect: (path: string) => MethodDecorator
const copy: (path: string) => MethodDecorator
const deleteM: (path: string) => MethodDecorator
const get: (path: string) => MethodDecorator
const head: (path: string) => MethodDecorator
const lock: (path: string) => MethodDecorator
const merge: (path: string) => MethodDecorator
const mkactivity: (path: string) => MethodDecorator
const mkcol: (path: string) => MethodDecorator
const move: (path: string) => MethodDecorator
const msearch: (path: string) => MethodDecorator
const notify: (path: string) => MethodDecorator
const options: (path: string) => MethodDecorator
const param: (path: string) => MethodDecorator
const patch: (path: string) => MethodDecorator
const post: (path: string) => MethodDecorator
const propfind: (path: string) => MethodDecorator
const proppatch: (path: string) => MethodDecorator
const purge: (path: string) => MethodDecorator
const put: (path: string) => MethodDecorator
const report: (path: string) => MethodDecorator
const search: (path: string) => MethodDecorator
const subscribe: (path: string) => MethodDecorator
const trace: (path: string) => MethodDecorator
const unlock: (path: string) => MethodDecorator
const unsubscribe: (path: string) => MethodDecorator

const register: (app: Router|Application, any) => void

export {
  controller,

  route, middleware, use,

  all, checkout, connect, copy, deleteM as delete, get, head, lock, merge, mkactivity, mkcol, move,
  /*msearch as "m-search",*/ notify, options, param, patch, post, propfind, proppatch, purge, put, report,
  search, subscribe, trace, unlock, unsubscribe,

  register
}