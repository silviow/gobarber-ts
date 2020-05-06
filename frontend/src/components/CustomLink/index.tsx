import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Link, LinkProps } from 'react-router-dom';
import { Container } from './styles';

interface CustomLinkProps extends LinkProps {
    icon?: React.ComponentType<IconBaseProps>;
    iconSize?: number;
}

const CustomLink: React.FC<CustomLinkProps> = ({
    icon: Icon,
    iconSize = 20,
    children,
    ...rest
}) => (
    <Container>
        <Link {...rest}>
            {Icon && <Icon size={iconSize} />}
            {children}
        </Link>
    </Container>
);

export default CustomLink;
