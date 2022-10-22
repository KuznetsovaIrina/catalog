interface IArrowIconProps {
  color?: string
}

const ArrowIcon = ({ color = '#fff' }: IArrowIconProps ) => {
  return (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.484629 0.312385C0.698013 0.133444 1.0108 0.139714 1.21684 0.327064L4.87341 3.65192C5.32409 4.06172 5.54944 4.26662 5.81144 4.32356C5.95139 4.35397 6.09623 4.35397 6.23618 4.32356C6.49818 4.26662 6.72353 4.06172 7.17421 3.65192L10.8334 0.324719C11.0365 0.14004 11.3461 0.13821 11.5514 0.320475C11.7907 0.532988 11.7923 0.906335 11.5548 1.12084L6.41667 5.7605C6.16667 5.98967 5.83333 6.10425 5.58333 5.87508L0.464647 1.1479C0.218172 0.920274 0.227555 0.527965 0.484629 0.312385Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowIcon;