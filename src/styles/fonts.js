import { css } from 'styled-components'

import InterBold from '../fonts/Inter-Bold.ttf'
import InterRegular from '../fonts/Inter-Regular.ttf'
import InterSemiBold from '../fonts/Inter-SemiBold.ttf'

const interNormalWeights = {
    400: InterRegular,
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
                src: url(${file}) format('ttf');
                font-weight: ${weight};
                font-style: ${styles};
                font-display: auto;
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