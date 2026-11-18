const paths = {
  wa:'<path d="M20.5 11.6a8.6 8.6 0 0 1-12.7 7.6L3 20.5l1.3-4.6a8.6 8.6 0 1 1 16.2-4.3Z"/><path d="M8.4 7.5c.4-.3.8-.1 1 .3l.8 1.7c.2.4-.1.7-.6 1.2.6 1.4 2.1 2.7 3.5 3.2l.9-1c.3-.3.6-.3 1-.1l1.6.8c.4.2.4.6.3 1-.3 1.2-1.4 1.8-2.6 1.6-3.4-.6-6.6-3.7-7-6.4-.1-1 .3-1.8 1.1-2.3Z"/>',
  pin:'<path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  card:'<rect x="2" y="5" width="20" height="15" rx="3"/><path d="M2 10h20M6 16h4"/>',
  award:'<circle cx="12" cy="8" r="6"/><path d="m8 13-2 8 4-2 2 3 2-8m2-1 2 8-4-2"/>',
  arrow:'<path d="M4 12h15m-6-6 6 6-6 6"/>', down:'<path d="M12 4v15m-6-6 6 6 6-6"/>',
  menu:'<path d="M3 7h18M3 12h18M3 17h18"/>',
  phone:'<path d="m7 3 3 5-2 2c1 3 4 6 7 7l2-2 5 3c-1 4-3 5-7 3C8 18 3 13 2 6c0-2 2-3 5-3Z"/>',
  insta:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',
  tooth:'<path d="M12 5c-2-1-4-2-6-1-3 1-3 5-2 8l3 7c.7 2 2.2 2 2.7-.3l1-4c.4-1.5 2.1-1.5 2.6 0l1 4c.5 2.3 2 2.3 2.7.3l3-7c1-3 1-7-2-8-2.2-1-4 1-6 1Zm0 0 3 1"/>',
  shine:'<path d="m9 3 1.8 5.3L16 10l-5.2 1.7L9 17l-1.8-5.3L2 10l5.2-1.7L9 3Zm9 10 1.2 3.8L23 18l-3.8 1.2L18 23l-1.2-3.8L13 18l3.8-1.2L18 13Z"/>',
  implant:'<path d="M7 3h10l2 2-1 5H6L5 5Zm1 10h8l-2 8h-4Zm0 3 8-2m-7 5 6-2"/>',
  teeth:'<path d="M2 9q10 8 20 0v6q-10 8-20 0Zm5 3v5m5-4v6m5-7v5"/>',
  leaf:'<path d="M4 20C0 9 9 5 21 3c0 13-5 20-17 17Zm0 0L16 9"/>',
  image:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="8" cy="9" r="1.5"/><path d="m4 17 5-4 3 2 4-5 5 6"/>'
}
export const icon=(key,size=22)=>`<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">${paths[key]}</svg>`
