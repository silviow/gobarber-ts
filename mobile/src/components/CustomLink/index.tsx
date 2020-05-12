import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, Icon, Text } from './styles';

interface CustomLinkProps extends RectButtonProperties {
    icon?: string;
    iconSize?: number;
    color?: string;
    fontSize?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
    icon,
    iconSize = 20,
    color = '#666360',
    fontSize = '18px',
    children,
    ...rest
}) => (
    <Container {...rest}>
        {icon && <Icon name={icon} size={iconSize} color={color} />}
        <Text color={color} fontSize={fontSize}>
            {children}
        </Text>
    </Container>
);

export default CustomLink;
