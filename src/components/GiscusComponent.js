import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
  <Giscus
        id="comments"
        repo="piga-sandbox/l-personal-website"
        repoId="R_kgDOJz_U-w"
        category="Announcements"
        categoryId="DIC_kwDOJz_U-84CbN4h"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
  );
}