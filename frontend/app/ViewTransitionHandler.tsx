'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function ViewTransitionHandler() {
    const router = useRouter()

    useEffect(() => {
        if (!('startViewTransition' in document)) return

        const handleClick = (e: MouseEvent) => {
            // 새 탭/창 열기(Ctrl·Cmd·Shift·Alt, 가운데 버튼)는 브라우저 기본 동작에 맡긴다
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

            const anchor = (e.target as Element).closest<HTMLAnchorElement>('a[href]')
            if (!anchor) return

            let url: URL
            try { url = new URL(anchor.href) } catch { return }

            if (url.origin !== location.origin) return
            if (anchor.target === '_blank') return
            if (anchor.download) return
            if (url.pathname === location.pathname && url.search === location.search) return

            e.preventDefault()
            // 링크 href 에는 basePath 가 이미 포함되어 있으므로 제거 후 push (router 가 다시 붙임)
            const path = BASE_PATH && url.pathname.startsWith(BASE_PATH)
                ? url.pathname.slice(BASE_PATH.length) || '/'
                : url.pathname
            const href = path + url.search + url.hash

            document.startViewTransition(async () => {
                router.push(href)
                // React가 새 페이지를 DOM에 반영할 때까지 대기
                await new Promise<void>(resolve => {
                    const observer = new MutationObserver(() => {
                        observer.disconnect()
                        resolve()
                    })
                    observer.observe(
                        document.querySelector('main') ?? document.body,
                        { childList: true, subtree: true }
                    )
                    setTimeout(resolve, 1000) // 최대 1초 대기 후 강제 진행
                })
            })
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [router])

    return null
}
