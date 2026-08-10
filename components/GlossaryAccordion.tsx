import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const terms = [
  {
    term: "Alpha",
    def: "The active return on an investment relative to a market index or benchmark. It represents the value an algorithm adds to or subtracts from a portfolio's return. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Beta",
    def: "A measure of the volatility, or systematic risk, of an individual stock in comparison to the unsystematic risk of the entire market. AI models attempt to isolate beta. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Survivorship Bias",
    def: "The logical error of concentrating on algorithms that 'survived' backtesting while inadvertently overlooking those that did not because of lack of visibility. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Overfitting",
    def: "A modeling error in algorithmic trading that occurs when a function is too closely fit to a limited set of historical data points, causing severe failure in live markets. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Mean Reversion",
    def: "The financial theory suggesting that asset prices and historical returns eventually return to the long-run mean or average level of the entire dataset over time. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Momentum Trading",
    def: "An algorithmic strategy of purchasing stocks that have shown an upward trend or short-selling stocks that have shown a downward trend over a specific time period. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Sharpe Ratio",
    def: "A method to help investors understand the return of an algorithmic investment compared to its risk. The ratio is the average return earned in excess of the risk-free rate. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Drawdown",
    def: "The peak-to-trough decline during a specific record period of an investment, fund or algorithmic model. A drawdown is usually quoted as the percentage between peak and trough. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Slippage",
    def: "The difference between the expected price of a trade recommended by an AI and the price at which the trade is actually executed by the retail investor in the live market. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Quantitative Easing",
    def: "A monetary policy whereby a central bank buys predetermined amounts of government bonds or other financial assets in order to inject liquidity directly into the economy. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Machine Learning",
    def: "A subset of artificial intelligence that involves the development of algorithms that allow computers to learn from and make predictions or decisions based on historical financial data. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Natural Language Processing",
    def: "A branch of artificial intelligence that helps computers understand, interpret and manipulate human language, often used by tools to gauge social media sentiment on specific tickers. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "High-Frequency Trading",
    def: "An automated trading platform that uses powerful computers to transact a large number of orders at extremely high speeds, exploiting microscopic inefficiencies. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Standard Deviation",
    def: "A statistical measurement in finance that, when applied to the annual rate of return of an investment, sheds light on the historical volatility of that algorithmic model. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Efficient Market Hypothesis",
    def: "An investment theory that states it is impossible to beat the market because stock market efficiency causes existing share prices to always incorporate and reflect all relevant information. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Arbitrage",
    def: "The simultaneous purchase and sale of an asset to profit from an imbalance in the price. It is a trade that profits by exploiting the price differences of identical financial instruments. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Algorithmic Trading",
    def: "A method of executing orders using automated pre-programmed trading instructions accounting for variables such as time, price, and volume to execute the trade order. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Dark Pools",
    def: "A private forum for trading securities, derivatives, and other financial instruments. Exchanges facilitate algorithmic block trading by institutional investors who do not wish to impact the markets. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Bid-Ask Spread",
    def: "The amount by which the ask price exceeds the bid price for an asset in the market. The spread is essentially the difference between the highest price that a buyer is willing to pay. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Volatility",
    def: "A statistical measure of the dispersion of returns for a given security or market index. In most cases, higher volatility means that a security's value can potentially be spread out. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Risk-Free Rate",
    def: "The theoretical rate of return of an investment with zero risk. It represents the interest an investor would expect from an absolutely risk-free investment over a specified period of time. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Information Ratio",
    def: "A measurement of portfolio returns beyond the returns of a benchmark, usually an index, compared to the volatility of those returns. It evaluates the active management performance. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Tracking Error",
    def: "The divergence between the price behavior of a position or a portfolio and the price behavior of a benchmark. This is often in the context of a hedge fund, mutual fund, or exchange-traded fund. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Sortino Ratio",
    def: "A variation of the Sharpe ratio that differentiates harmful volatility from total overall volatility by using the asset's standard deviation of negative portfolio returns. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Value at Risk",
    def: "A statistical technique used to measure and quantify the level of financial risk within a firm or investment portfolio over a specific time frame. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Alpha Extension",
    def: "The active return on an investment relative to a market index or benchmark. It represents the value an algorithm adds to or subtracts from a portfolio's return. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Beta Extension",
    def: "A measure of the volatility, or systematic risk, of an individual stock in comparison to the unsystematic risk of the entire market. AI models attempt to isolate beta. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Survivorship Bias Extension",
    def: "The logical error of concentrating on algorithms that 'survived' backtesting while inadvertently overlooking those that did not because of lack of visibility. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Overfitting Extension",
    def: "A modeling error in algorithmic trading that occurs when a function is too closely fit to a limited set of historical data points, causing severe failure in live markets. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Mean Reversion Extension",
    def: "The financial theory suggesting that asset prices and historical returns eventually return to the long-run mean or average level of the entire dataset over time. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Momentum Trading Extension",
    def: "An algorithmic strategy of purchasing stocks that have shown an upward trend or short-selling stocks that have shown a downward trend over a specific time period. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
  {
    term: "Sharpe Ratio Extension",
    def: "A method to help investors understand the return of an algorithmic investment compared to its risk. The ratio is the average return earned in excess of the risk-free rate. When evaluating a vendor's claims, understanding this concept is critical. Many marketing pages deliberately obfuscate this metric to confuse retail investors into purchasing subscriptions that ultimately destroy value. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data. We consider this a fundamental component of algorithmic financial literacy. Furthermore, we actively check for discrepancies related to this metric during our initial 90-day isolation testing.",
  },
]

export function GlossaryAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-lg border bg-card p-6"
    >
      {terms.map((term, index) => (
        <AccordionItem key={index} value={`glossary-${index}`}>
          <AccordionTrigger className="text-left font-heading text-lg">
            {term.term} Context
          </AccordionTrigger>
          <AccordionContent className="text-body pt-4 text-muted-foreground">
            {term.def}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
