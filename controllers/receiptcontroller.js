import Receipt from "../models/receipt.js";
import Property from "../models/Property.js";

function generateReceiptNo() {
  return "NOLP" + Math.floor(1000000 + Math.random() * 9000000);
}

export const generateReceipt = async (req, res) => {
  try {
    const { sasNo, totalPayable } = req.body;

    const property = await Property.findOne({ Application_No: sasNo });

    const receipt = await Receipt.create({
      receiptNo: generateReceiptNo(),
      sasNo,
      applicantName: property.owners[0].name,
      mobile: property.mobile,
      propertyAddress: property.propertyAddress,

      propertyTax: totalPayable,
      swmTax: 0,
      totalTax: totalPayable,

      paymentDate: new Date(),
      orderNo: Math.floor(1000000 + Math.random() * 9000000),
      transactionRef: Date.now().toString()
    });

    res.json({ success: true, data: receipt });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};