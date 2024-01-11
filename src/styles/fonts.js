import { css } from 'styled-components'

import InterBold from '../fonts/Inter-Bold.ttf'
import InterRegular from '../fonts/Inter-Regular.ttf'
import InterSemiBold from '../fonts/Inter-SemiBold.ttf'
import InterMedium from '../fonts/Inter-Medium.ttf'

const interNormalWeights = {
    400: InterRegular,
    500: InterMedium,
    600: InterSemiBold,
    700: InterBold,
}

// italic weights here if needed

const inter = {
    name: 'Inter',
    normal: interNormalWeights
}

const createFontFace = (family, style = 'normal') => {
    let styles = ''

    for (const [weight, file] of Object.entries(family[style])) {
        styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${file}) format('truetype');
                font-weight: ${weight};
                font-style: ${style};
                font-display: swap;
            }
        `
    }

    return styles
}

const interNormal = createFontFace(inter)

const fonts = css`
    ${interNormal}
`

export default fonts