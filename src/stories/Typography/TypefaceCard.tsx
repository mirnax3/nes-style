import { PanelBasic } from 'components/layout/Panel/PanelBasic';
import { PanelItem } from 'components/layout/Panel/PanelItem';
import { HeadingText, MetaText } from 'components/Typography';
import { memo } from 'react';

const TypefaceCard = memo(() => {
  return (
    <PanelBasic className="max-w-[150px]">
      <PanelItem fullWidth direction="col" paddingY={false} className="py-6">
        <HeadingText size="XL">Ag</HeadingText>
        <MetaText bold>Inter</MetaText>
        <MetaText>Google Fonts</MetaText>
        <MetaText>Sans-serif</MetaText>
      </PanelItem>
    </PanelBasic>
  );
});

TypefaceCard.displayName = 'TypefaceCard';

export { TypefaceCard };
