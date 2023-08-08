type SVGProps = React.SVGAttributes<SVGSVGElement>;

interface IconProps extends SVGProps {
  symbolId: string;
}

function Icon({ symbolId, ...svgProps }: IconProps) {
  return (
    <svg fill={svgProps.fill ?? "currentColor"} {...svgProps}>
      <use href={`/sprite.svg#${symbolId}`} />
    </svg>
  );
}

export function ExternalLinkIcon(props: SVGProps) {
  return <Icon symbolId="external-link" {...props} />;
}
