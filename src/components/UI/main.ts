import styled, { css, keyframes } from 'styled-components';

const textAnimationKeyframes = keyframes`
	0% {
		opacity: 1;
		background-position-x: 100%;
		color: transparent;
	}

	40% {
		opacity: 1;
		background-position-x: 0%;
		color: transparent;
	}

	60% {
		opacity: 1;
		background-position-x: 0%;
		color: var(--animation-color);
	}

	100% {
		opacity: 1;
		background-position-x: -100%;
		color: var(--animation-color);
	}
`;

const textAnimationStyles = css`
	background: linear-gradient(
		to right,
		var(--animation-color) 0%, var(--animation-color) 50%,
		transparent 50%, transparent 100%
	);
	background-size: 200% 100%;

	animation: ${textAnimationKeyframes} 1s 1s ease-in forwards;
	opacity: 0;
`;

export const Content = styled.div`
	--animation-color: var(--text-gray-color);
	position: relative;

    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;

	&:before,
	&:after {
		--font-size: 5rem;
		--letter-spacing: normal;

		@media only screen and (min-width: 660px) {
			--font-size: 7rem;
		}

		@media only screen and (min-width: 1024px) {
			--font-size: 9rem;
			--letter-spacing: -4px;
		}

		@media only screen and (min-width: 1440px) {
			--font-size: 11.5rem;
		}

		position: absolute;
		top: 50%;

		width: 50%;
		overflow: hidden;

		color: var(--text-gray-color);
		font-size: var(--font-size);
		font-weight: 700;
		letter-spacing: var(--letter-spacing);
		text-indent: var(--text-indent);
		text-transform: uppercase;

		z-index: -1;

		${textAnimationStyles};
	}

	&:before {
		--margin-top: -45px;
		--text-indent: -15px;

		@media only screen and (min-width: 660px) {
			--margin-top: -70px;
		}

		@media only screen and (min-width: 1024px) {
			--margin-top: -90px;
			--text-indent: -6px;
		}

		@media only screen and (min-width: 1440px) {
			--margin-top: -120px;
		}

		content: 'frontend';
		left: 0;
		margin-top: var(--margin-top);
		text-align: right;
		text-indent: var(--text-indent);
	}

	&:after {
		--text-indent: -15px;

		@media only screen and (min-width: 1024px) {
			--text-indent: -44px;
		}

		content: 'developer';
		right: 0;
		margin-top: -13px;
		text-indent: var(--text-indent);
	}
`;

export const Title = styled.h1`
	--font-size: 3.5rem;
	--width: 100%;
	--margin: 35px auto 15px;
	--animation-color: var(--text-primary-color);

	@media only screen and (min-width: 370px) {
		--font-size: 4.2rem;
	}

	@media only screen and (min-width: 660px) {
        --font-size: 8rem;
    }

	@media only screen and (min-width: 1024px) {
		--font-size: 11.5rem;
		--margin: 20px auto 0 -40px;
		--width: 900px;
	}

	@media only screen and (min-width: 1440px) {
		--font-size: 14.5rem;
		--margin: 20px auto 0 -45px;
		--width: 1130px;
	}

    margin: var(--margin);
	width: var(--width);

	font-size: var(--font-size);
	font-weight: 300;
    text-align: center;
	word-spacing: 15px;
    white-space: nowrap;

	${textAnimationStyles};
`;

export const Summary = styled.h2`
	--animation-color: var(--text-primary-color);

	height: 20px;
	margin: 0;

	display: flex;
	justify-content: space-evenly;
    flex-wrap: wrap;
	
	line-height: 2rem;
	text-align: center;

	font-size: var(--text-size);
	font-weight: 300;

	& > span {
		white-space: nowrap;
		padding: 0 6px;
	}

	@media only screen and (min-width: 1024px) {
		display: block;
		position: relative;
		top: -10px;		
		width: 50%;
		align-self: flex-start;
		padding: 0;

		& > span {
			padding: 0;
		}

		& > span:not(:first-child) {
			margin-left: 15px;
		}
	}

	@media only screen and (min-width: 1440px) {
		top: -6px;
	}

	${textAnimationStyles};
`;
