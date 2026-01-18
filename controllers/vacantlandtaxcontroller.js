// vacantlandtaxcontroller.js
import VacantLandTax from "../models/vacantlandtax.js";
import Property from "../models/Property.js";

export const calculateVacantLandTax = async (req, res) => {
  try {
    const { applicationNo } = req.params;

    /* 🔹 FETCH PROPERTY */
    const property = await Property.findOne({ Application_No: applicationNo });
    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found"
      });
    }

    const plotArea = Number(property.plotArea || 0);
    const acquisitionDate = new Date(property.acquisitionDate);
    const today = new Date();

    const RATE = 3.57; // Rs per sq.ft per year

    /* ================================
       COMPLETED YEARS (PMC STYLE)
    ================================ */
    let completedYears =
      today.getFullYear() - acquisitionDate.getFullYear();

    const anniversaryPassed =
      today.getMonth() > acquisitionDate.getMonth() ||
      (today.getMonth() === acquisitionDate.getMonth() &&
        today.getDate() >= acquisitionDate.getDate());

    if (!anniversaryPassed) {
      completedYears -= 1;
    }

    if (completedYears < 0) completedYears = 0;

    /* ================================
       TAX CALCULATION
    ================================ */
    const annualTax = plotArea * RATE;
    const vacantLandTax = annualTax * completedYears;

    /* ================================
       PENALTY LOGIC
       (AFTER TAX + 3 MONTHS)
    ================================ */
    let fixedPenalty = 0;
    let percentagePenalty = 0;

    if (completedYears > 0) {
      // date when first tax became applicable
      const taxStartDate = new Date(acquisitionDate);
      taxStartDate.setFullYear(
        acquisitionDate.getFullYear() + completedYears
      );

      // penalty applicable after 3 months
      const penaltyStartDate = new Date(taxStartDate);
      penaltyStartDate.setMonth(penaltyStartDate.getMonth() + 3);

      if (today > penaltyStartDate) {
        fixedPenalty = 5000;
        percentagePenalty = vacantLandTax * 0.06;
      }
    }

    /* ================================
       TOTAL (ADD ONLY AT END)
    ================================ */
    const totalPayable =
      vacantLandTax + fixedPenalty + percentagePenalty;

    /* ================================
       SAVE / UPDATE
    ================================ */
    const taxData = await VacantLandTax.findOneAndUpdate(
      { applicationNo },
      {
        applicationNo,
        plotArea,
        acquisitionDate,
        ratePerSqFt: RATE,
        completedYears,
        annualTax,
        vacantLandTax,
        fixedPenalty,
        percentagePenalty,
        totalPayable
      },
      { new: true, upsert: true }
    );

    return res.json({
      success: true,
      data: taxData
    });

  } catch (error) {
    console.error("Vacant Land Tax Error:", error);
    return res.status(500).json({
      success: false,
      message: "Tax calculation failed"
    });
  }
};
