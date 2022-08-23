export default function MemberIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={props.height} viewBox="0 0 24 24" width={props.width} className={props.className}>
      <g stroke={props.fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <circle cx="9" cy="7" r="4" />
        <path d="m2 21v-4c0-1.1046.89543-2 2-2h10c1.1046 0 2 .8954 2 2v4" />
        <path d="m16 3c.8604.2203 1.623.7207 2.1676 1.42231s.8402 1.56452.8402 2.45269-.2956 1.75108-.8402 2.45269-1.3072 1.20201-2.1676 1.42231" />
        <path d="m19 15h1c1.1046 0 2 .8954 2 2v4" />
      </g>
    </svg>
  );
}
