const CARD_HTML = `
    <svg
        width="{{ width }}"
        height="{{ height }}"
        viewBox="0 0 {{ width }} {{ height }}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)">
        </rect>

    </svg>
`;
module.exports = CARD_HTML;
