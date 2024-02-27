import { series, parallel } from 'gulp'
import { buildUI } from './build'

export default series(parallel(buildUI))
