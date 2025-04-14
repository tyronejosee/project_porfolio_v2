type Props = {
  children: React.ReactNode;
};

export default function FormError({ children }: Props) {
  return <span className="text-xs text-primary">{children}</span>;
}
