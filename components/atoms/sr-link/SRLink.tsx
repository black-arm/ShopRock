import Link from 'next/link'

export const SRLink = ({href, children, style}: any) =>{

    return (
        <Link href={href}>
            <a style={style}>{children}</a>
        </Link>
    )
}