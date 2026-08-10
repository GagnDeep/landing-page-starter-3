import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const realTerms = [
  {
    term: "Alpha Generation",
    def: "The active return on an investment relative to a market index or benchmark. It represents the value an algorithm adds to or subtracts from a portfolio's return. Our independent baselining isolates this factor by enforcing strict, immutable holding periods against the SPY benchmark, removing the vendor's ability to selectively backtest historical data.",
  },
  {
    term: "Beta Neutrality",
    def: "A measure of the volatility, or systematic risk, of an individual stock in comparison to the unsystematic risk of the entire market. AI models attempt to isolate beta to generate pure alpha. Understanding this concept is critical, as many algorithms mistake high beta in a bull market for actual algorithmic skill.",
  },
  {
    term: "Survivorship Bias",
    def: "The logical error of concentrating on algorithms that 'survived' backtesting while inadvertently overlooking those that did not because of lack of visibility. Vendors frequently delete underperforming portfolios to artificially inflate their marketed win rates. Our immutable tracking ledger permanently prevents this manipulation.",
  },
  {
    term: "Overfitting",
    def: "A modeling error in algorithmic trading that occurs when a function is too closely fit to a limited set of historical data points, causing severe failure in live markets. Vendors curve-fit parameters to create perfect theoretical backtests that inevitably collapse when exposed to out-of-sample forward trading.",
  },
  {
    term: "Mean Reversion",
    def: "The financial theory suggesting that asset prices and historical returns eventually return to the long-run mean or average level of the entire dataset over time. Algorithms heavily reliant on this theory will aggressively buy dips, requiring strict stop-loss protocols to prevent catastrophic drawdowns during secular trend shifts.",
  },
  {
    term: "Momentum Trading",
    def: "An algorithmic strategy of purchasing stocks that have shown an upward trend or short-selling stocks that have shown a downward trend over a specific time period. These models perform exceptionally well during sustained bull markets but generate massive negative alpha during range-bound chop.",
  },
  {
    term: "Sharpe Ratio",
    def: "A method to help investors understand the return of an algorithmic investment compared to its risk. The ratio is the average return earned in excess of the risk-free rate per unit of volatility. We monitor standard deviations to ensure algorithms aren't simply taking on massive risk to clear the SPY hurdle.",
  },
  {
    term: "Maximum Drawdown",
    def: "The peak-to-trough decline during a specific record period of an investment, fund or algorithmic model. A drawdown is usually quoted as the percentage between peak and trough. Retail investors often lack the psychological fortitude to hold an algorithm through a 40% drawdown, making this metric vital.",
  },
  {
    term: "Execution Slippage",
    def: "The difference between the expected price of a trade recommended by an AI and the price at which the trade is actually executed by the retail investor in the live market. High-frequency algorithms that claim high win rates often collapse entirely when standard retail slippage and exchange fees are accounted for.",
  },
  {
    term: "Quantitative Easing",
    def: "A monetary policy whereby a central bank buys predetermined amounts of government bonds or other financial assets in order to inject liquidity directly into the economy. Macro-aware algorithms adjust their beta exposure heavily based on central bank liquidity, whereas naive price-action models often get trapped during liquidity withdrawals.",
  },
  {
    term: "Machine Learning (ML)",
    def: "A subset of artificial intelligence that involves the development of algorithms that allow computers to learn from and make predictions or decisions based on historical financial data. Vendors often conflate simple linear regression models with advanced neural networks to justify high subscription fees.",
  },
  {
    term: "Natural Language Processing",
    def: "A branch of artificial intelligence that helps computers understand, interpret and manipulate human language, often used by tools to gauge social media sentiment on specific tickers. These algorithms attempt to front-run retail volume by scraping platforms like Twitter and Reddit for sudden spikes in ticker mentions.",
  },
  {
    term: "High-Frequency Trading",
    def: "An automated trading platform that uses powerful computers to transact a large number of orders at extremely high speeds, exploiting microscopic inefficiencies. Retail investors cannot execute HFT strategies due to latency limits, meaning any vendor selling a retail HFT subscription is fundamentally misleading their user base.",
  },
  {
    term: "Standard Deviation",
    def: "A statistical measurement in finance that, when applied to the annual rate of return of an investment, sheds light on the historical volatility of that algorithmic model. Higher standard deviation indicates higher systemic risk, requiring a proportionately higher alpha generation to justify the capital allocation.",
  },
  {
    term: "Efficient Market Hypothesis",
    def: "An investment theory that states it is impossible to beat the market because stock market efficiency causes existing share prices to always incorporate and reflect all relevant information. If this hypothesis holds completely true, paying a monthly subscription fee for an algorithmic stock picker is inherently irrational.",
  },
  {
    term: "Statistical Arbitrage",
    def: "The simultaneous purchase and sale of an asset to profit from an imbalance in the price. It is a trade that profits by exploiting the price differences of identical financial instruments. True arbitrage is nearly impossible for retail traders, making claims of retail arbitrage highly suspect.",
  },
  {
    term: "Algorithmic Order Routing",
    def: "A method of executing orders using automated pre-programmed trading instructions accounting for variables such as time, price, and volume to execute the trade order. Advanced algorithms attempt to hide their institutional footprints by breaking up massive block trades into thousands of micro-transactions across dark pools.",
  },
  {
    term: "Dark Pools",
    def: "A private forum for trading securities, derivatives, and other financial instruments. Exchanges facilitate algorithmic block trading by institutional investors who do not wish to impact the markets. Retail volume algorithms attempt to parse dark pool prints to determine where institutional support and resistance layers are forming.",
  },
  {
    term: "Bid-Ask Spread",
    def: "The amount by which the ask price exceeds the bid price for an asset in the market. The spread is essentially the difference between the highest price that a buyer is willing to pay. Illiquid penny stocks have massive spreads that destroy the theoretical returns of heavily-marketed algorithmic scalpers.",
  },
  {
    term: "Implied Volatility",
    def: "A statistical measure of the dispersion of returns for a given security or market index. In most cases, higher volatility means that a security's value can potentially be spread out. Options-based algorithms rely heavily on the IV rank to determine whether premium is historically cheap or expensive.",
  },
  {
    term: "Risk-Free Rate",
    def: "The theoretical rate of return of an investment with zero risk. It represents the interest an investor would expect from an absolutely risk-free investment over a specified period of time. In high interest rate environments, the hurdle rate for an algorithm to prove its worth increases dramatically.",
  },
  {
    term: "Information Ratio",
    def: "A measurement of portfolio returns beyond the returns of a benchmark, usually an index, compared to the volatility of those returns. It evaluates the active management performance. A negative information ratio indicates the algorithm's active decisions are destroying capital relative to a passive indexing approach.",
  },
  {
    term: "Tracking Error",
    def: "The divergence between the price behavior of a position or a portfolio and the price behavior of a benchmark. This is often in the context of a hedge fund, mutual fund, or exchange-traded fund. We utilize tracking error to determine the exact correlation between a vendor's algorithm and the SPY ETF.",
  },
  {
    term: "Sortino Ratio",
    def: "A variation of the Sharpe ratio that differentiates harmful volatility from total overall volatility by using the asset's standard deviation of negative portfolio returns. Unlike the Sharpe ratio, it does not penalize an algorithm for generating massive upside volatility, providing a clearer picture of true downside risk.",
  },
  {
    term: "Value at Risk (VaR)",
    def: "A statistical technique used to measure and quantify the level of financial risk within a firm or investment portfolio over a specific time frame. VaR modeling is notoriously fragile during black swan events, often causing complex algorithms to deleverage at the exact bottom of a market crash.",
  },
  {
    term: "Look-Ahead Bias",
    def: "An error that occurs when a trading model utilizes data in a backtest that would not have been available during the actual historical time period. This creates impossibly perfect entry and exit signals. Our forward-testing apparatus completely eliminates look-ahead bias by locking trades at market open.",
  },
  {
    term: "Data Mining Snooping",
    def: "The practice of running thousands of variables through historical market data until a statistically significant pattern is found by pure random chance. Vendors use these random correlations to build marketing narratives, but the algorithms inevitably fail because the pattern possessed no underlying economic logic.",
  },
  {
    term: "Capacity Constraints",
    def: "The maximum amount of capital an algorithmic strategy can deploy before its own buying and selling pressure destroys its edge. Many strategies that work flawlessly with ten thousand dollars will fail catastrophically when a vendor attempts to scale the model to millions of subscriber dollars.",
  },
  {
    term: "Long-Tail Risk",
    def: "The probability of an extreme, rare event occurring that falls far outside the normal distribution of market returns. Algorithms utilizing deep out-of-the-money options selling often generate consistent small wins for years before a single long-tail event wipes out the entire portfolio in an afternoon.",
  },
  {
    term: "Time Decay (Theta)",
    def: "The rate of decline in the value of an options contract due to the passage of time. Algorithms specializing in premium harvesting rely on theta decay to generate consistent returns, requiring high win rates to offset the asymmetric downside risk profile inherent in short-volatility strategies.",
  },
  {
    term: "Regime Change",
    def: "A fundamental shift in the underlying macroeconomic environment, such as moving from a low-inflation, quantitative easing environment to a high-inflation, tightening cycle. Algorithms trained exclusively on data from the 2010s bull market frequently experience catastrophic failures when the market regime suddenly shifts to a restrictive stance.",
  },
  {
    term: "Confirmation Bias",
    def: "The tendency of retail investors to actively seek out algorithmic tools that validate their pre-existing market biases. If an investor is bearish, they will naturally gravitate toward algorithms that predict crashes, ignoring empirical data that demonstrates the model has generated severe negative alpha during expansionary cycles.",
  },
  {
    term: "Hurdle Rate",
    def: "The minimum acceptable return on an investment. For algorithmic trading platforms targeting retail investors, the hurdle rate must factor in the monthly subscription cost, the applicable short-term capital gains tax rates, and the baseline return of the passive SPY index fund over the same temporal period.",
  },
  {
    term: "Margin Call",
    def: "A demand by a broker that an investor deposit further cash to cover possible losses. Algorithms that utilize excessive leverage to artificially boost their absolute returns expose subscribers to severe margin call risks during sudden intraday volatility spikes, destroying the theoretical long-term yield of the model.",
  },
  {
    term: "Wash Trading",
    def: "The illegal process of buying and selling the same financial instruments to create false, misleading activity in the marketplace. While primarily a concern in unregulated cryptocurrency markets, algorithmic transparency in traditional equities is required to ensure vendors aren't utilizing illiquid micro-caps to paint the tape.",
  },
]

export function MegaGlossary({ count = 35 }: { count?: number }) {
  const renderedTerms = realTerms.slice(0, count)
  return (
    <div className="w-full overflow-hidden rounded-lg border bg-card text-left">
      {renderedTerms.map((term, index) => (
        <div
          key={index}
          className="border-b border-border/50 p-6 last:border-b-0"
        >
          <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
            {term.term} Analysis
          </h3>
          <p className="text-body leading-relaxed text-muted-foreground">
            {term.def}
          </p>
        </div>
      ))}
    </div>
  )
}

export function GlossaryAccordion({ count = 20 }: { count?: number }) {
  const renderedTerms = realTerms.slice(0, count)
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-lg border bg-card p-6"
    >
      {renderedTerms.map((term, index) => (
        <AccordionItem key={index} value={`glossary-acc-${index}`}>
          <AccordionTrigger className="text-left font-heading text-lg">
            {term.term} Context
          </AccordionTrigger>
          <AccordionContent className="text-body pt-4 leading-relaxed text-muted-foreground">
            {term.def}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
