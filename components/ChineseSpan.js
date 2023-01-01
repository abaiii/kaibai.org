import { Noto_Sans_SC } from "@next/font/google";

const nssc = Noto_Sans_SC({ weight: ['400', '500'], subsets: ['chinese-simplified']})

const ChineseSpan = ({ children }) => {
    return (
        <span className={nssc.className}>
            {children}
        </span>
    )
}

export default ChineseSpan