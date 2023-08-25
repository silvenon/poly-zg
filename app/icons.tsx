type SVGProps = React.SVGAttributes<SVGSVGElement>;

interface IconProps extends SVGProps {
  symbolId: string;
}

function Icon({ symbolId, ...svgProps }: IconProps) {
  return (
    <svg {...svgProps}>
      <use href={`/sprite.svg#${symbolId}`} />
    </svg>
  );
}

export function ExternalLinkIcon(props: SVGProps) {
  return <Icon symbolId="external-link" fill="currentColor" {...props} />;
}
