// sidebars-a.js
module.exports = {
 productASidebar: [
   'intro',
   {
     type: 'category',
     label: 'Getting Started',
     items: ['product-docs/product-overview', 'product-docs/installation'],
   },
   {
     type: 'category',
     label: 'Using',
     items: ['product-docs/using', 'product-docs/troubleshooting'],
   },
   {
     type: 'category',
     label: 'Administering',
     items: ['product-docs/administration', 'product-docs/uninstalling'],
   },
 ],
};