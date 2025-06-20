function simulateEconomyAI(tax, spending, interest) {
  // Normalize inputs (0–100 scale assumed)
  tax = Math.max(0, Math.min(tax, 100));
  spending = Math.max(0, Math.min(spending, 100));
  interest = Math.max(0, Math.min(interest, 100));

  // Set base economic indicators
  let gdpGrowth = 2.5;        // baseline in %
  let inflation = 2.0;        // baseline in %
  let unemployment = 5.0;     // baseline in %

  // Apply effects
  // Taxes generally reduce GDP and increase unemployment
  gdpGrowth -= (tax - 50) * 0.03;
  unemployment += (tax - 50) * 0.05;

  // Government spending increases GDP but may also increase inflation
  gdpGrowth += (spending - 50) * 0.04;
  inflation += (spending - 50) * 0.03;
  unemployment -= (spending - 50) * 0.04;

  // Interest rate effects
  gdpGrowth -= (interest - 50) * 0.025;
  inflation -= (interest - 50) * 0.02;
  unemployment += (interest - 50) * 0.03;

  // Clamp values for realism
  gdpGrowth = Math.max(-5, Math.min(gdpGrowth, 10));
  inflation = Math.max(-2, Math.min(inflation, 15));
  unemployment = Math.max(0, Math.min(unemployment, 25));

  return {
    gdpGrowth: gdpGrowth.toFixed(2) + '%',
    inflation: inflation.toFixed(2) + '%',
    unemployment: unemployment.toFixed(2) + '%'
  };
}

// Example usage
const scenario = simulateEconomyAI(60, 70, 30);
console.log("AI-Simulated Economy:", scenario);
