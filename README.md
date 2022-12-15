The goal is to create two styles of table using the sample data JSON file provided, designs for the table can be found at the XD link below.

https://xd.adobe.com/view/28571f22-135b-4c71-ad29-1b334c104943-7d04/specs/

The sample data is provided in the “data.json” file. The price bands are always defined in the array “priceBands”. The tier item will have data for each price band, if no data for that price band is available an empty string will be supplied, so it is safe to assume that the item in the prices array matches the item in priceBands array.

The number of price bands defined can change, the test data supplies 4 different bands, it is safe to assume at least one price brand will be supplied and a maximum of 5 bands could be supplied. The table should adjust to the number of bands defined in the data, for example the Over 65 band might be removed in the future.

The custom font used for the main title has been included in the fonts.css file. The font “SFProText-Bold” as shown in the XD link can be replace with the base font of Verdana or Arial.

This is a mobile only table, so larger screen sizes don’t need to be considered at this time.
