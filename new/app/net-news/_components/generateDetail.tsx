'use client'
import { useEffect } from 'react';

export default function NetListDetail({ content }: { content: string }) {

    useEffect(() => {
        document.querySelectorAll(".article-body img").forEach(imgElement => {
            const intersectionObserver = new IntersectionObserver((entry) => {
                if (entry[0].isIntersecting) {
                    // @ts-ignore
                    const src = entry[0].target.dataset.src
                    if (src) {
                        entry[0].target.setAttribute('src', src)
                    }
                    intersectionObserver.disconnect()
                }
            })
            intersectionObserver.observe(imgElement)
        })
    }, [])

    return (

        <div dangerouslySetInnerHTML={{ __html: content }} />

    );
}

