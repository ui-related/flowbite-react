import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '../../';
import { useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteFooterTitleTheme {
  base: string;
}

export interface FooterTitleProps extends PropsWithChildren<ComponentProps<'h2'>> {
  as?: ElementType;
  theme?: DeepPartial<FlowbiteFooterTitleTheme>;
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({
  as: Component = 'h2',
  className,
  theme: customTheme = {},
  title,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.footer.title, customTheme);

  return (
    <Component data-testid="flowbite-footer-title" className={twMerge(theme.base, className)} {...props}>
      {title}
    </Component>
  );
};
