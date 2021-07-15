import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps { }

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LucaxIcon, UsdpIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const BoldText = styled(Text)`
  font-weight: 800;
  font-size: 14px;
`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        {cakePriceUsd ? (
          <PriceLink href={priceLink} target="_blank">
            <LucaxIcon width="24px" mr="8px" />
            <BoldText color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</BoldText>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
        {cakePriceUsd ? (
          <PriceLink href={priceLink} target="_blank">
            <UsdpIcon width="24px" mr="8px" />
            <BoldText color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</BoldText>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
      </SocialEntry>
      <SettingsEntry>
        <Flex>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "18px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "8px" : 0;
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
        <Button variant="text" onClick={() => toggleTheme(!isDark)}>
          {/* alignItems center is a Safari fix */}
          <Flex alignItems="center">
            <SunIcon color={isDark ? "textDisabled" : "text"} width="18px" />
            <Text color="textDisabled" mx="4px">
              /
            </Text>
            <MoonIcon color={isDark ? "text" : "textDisabled"} width="18px" />
          </Flex>
        </Button>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
