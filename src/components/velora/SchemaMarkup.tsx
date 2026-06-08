interface SchemaMarkupProps {
  schema: object | object[];
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const data = Array.isArray(schema)
    ? { "@context": "https://schema.org", "@graph": schema }
    : schema;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
