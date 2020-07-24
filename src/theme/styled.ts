import styled, { CreateStyled } from '@emotion/styled';

type Theme = {
    color: {
        text: string;
        background: string;
    };
};

export default styled as CreateStyled<Theme>;
