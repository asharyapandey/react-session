import { FC, ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { colorTheme as theme } from "../theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "danger";
	outlined?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
	padding: 10px 20px;
	font-size: 1rem;
	border: 2px solid transparent;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;

	${({ variant, outlined, disabled }) => {
		if (disabled) {
			return css`
				background-color: ${theme.disabledBg};
				color: ${theme.disabledText};
				border-color: ${theme.disabledBg};
				cursor: not-allowed;
				opacity: 0.6;

				&:hover {
					background-color: ${theme.disabledBg};
					color: ${theme.disabledText};
				}
			`;
		}

		const color = variant ? theme[variant] : theme.primary;
		return css`
			background-color: ${outlined ? "transparent" : color};
			color: ${outlined ? color : theme.text};
			border-color: ${color};

			&:hover {
				background-color: ${outlined ? color : theme.text};
				color: ${outlined ? theme.text : color};
			}
		`;
	}}
`;

const Button: FC<ButtonProps> = ({
	variant = "primary",
	outlined = false,
	children,
	...props
}) => {
	return (
		<StyledButton variant={variant} outlined={outlined} {...props}>
			{children}
		</StyledButton>
	);
};

export default Button;
