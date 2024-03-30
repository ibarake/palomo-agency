import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
    icon: 'crown';
  };
  attributes: {
    Logo: Attribute.Media & Attribute.Required;
    Menu: Attribute.Component<'global.link-and-text', true> &
      Attribute.Required;
    cta: Attribute.Component<'global.link-and-text'> & Attribute.Required;
  };
}

export interface GlobalLinkAndText extends Schema.Component {
  collectionName: 'components_global_link_and_texts';
  info: {
    displayName: 'Link & Text';
    icon: 'exit';
  };
  attributes: {
    Text: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.header': GlobalHeader;
      'global.link-and-text': GlobalLinkAndText;
    }
  }
}
