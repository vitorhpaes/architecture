import { DeviceType } from '@config/types/config/devices'
import { lazy } from 'react'

export const BREAKPOINTS = {
    LARGE: 1200,
}

export const DESKTOP_DEVICE: DeviceType = 'desktop'
export const MOBILE_DEVICE: DeviceType = 'mobile'

const clientWidth = !isNaN(document.documentElement.clientWidth)
    ? document.documentElement.clientWidth
    : 0

const clientHeight = !isNaN(document.documentElement.clientHeight)
    ? document.documentElement.clientHeight
    : 0

const innerWidth = !isNaN(window.innerWidth) ? window.innerWidth : 0
const innerHeight = !isNaN(window.innerHeight) ? window.innerHeight : 0

export const viewport = () => ({
    width: Math.max(clientWidth, innerWidth),
    height: Math.max(clientHeight, innerHeight),
})

export const isDesktop = () => {
    return viewport().width >= BREAKPOINTS.LARGE
}

export const isMobile = () => !isDesktop()

export const currentDevice = () => {
    return isMobile() ? MOBILE_DEVICE : DESKTOP_DEVICE
}

export const loadByDevice = (path: string) =>
    lazy(async () => await import('@devices/' + currentDevice() + '/' + path))
