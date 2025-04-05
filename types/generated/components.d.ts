import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_blocks_markdowns';
  info: {
    displayName: 'Markdown';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface BlocksMedia extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    caption: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    body: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.markdown': BlocksMarkdown;
      'blocks.media': BlocksMedia;
      'blocks.rich-text': BlocksRichText;
    }
  }
}
