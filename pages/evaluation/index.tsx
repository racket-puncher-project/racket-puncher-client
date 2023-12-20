import styled from "styled-components";
import EvaluationCard from "../../components/contents/my/evaluationCard";
import {pxToRem} from "../../utils/formatter";
import {rem} from "polished";
import {
  FontFamilyBold,
  FontFamilySemiBold,
  FontSizeLg, FontSizeSpLg,
  InputLabelColor
} from "../../styles/ts/common";


export default function EvaluationPage() {
  return (
    <>
      <EvaluationContainer>
        <p>평가하기</p>
        <EvaluationCardBox>
          <EvaluationCard/>
          <EvaluationCard/>
        </EvaluationCardBox>

      </EvaluationContainer>
    </>
  )
}

const EvaluationContainer = styled.div`
  padding: ${(props) => (props.theme.isResponsive ? `${pxToRem('50px')} ${pxToRem('35px')}` : `${rem('50px')} ${rem('35px')}`)};
  p {
    color: ${InputLabelColor};
    font-family: ${FontFamilySemiBold};
    font-size: ${(props) => props.theme.isResponsive ? pxToRem(FontSizeSpLg) : rem(FontSizeSpLg)};
    text-align: center;
    margin-bottom: 30px;
  }
`

const EvaluationCardBox = styled.div`

`