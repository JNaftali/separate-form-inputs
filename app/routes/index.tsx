import { DataFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export async function loader({ request }: DataFunctionArgs) {
  return Object.fromEntries(new URL(request.url).searchParams);
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Form shtuffs</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Form id="someFormId">
          <label htmlFor="search">
            Search:&nbsp;
            <input
              defaultValue={data.search}
              id="search"
              name="search"
              type="search"
            />
          </label>
        </Form>
        <label htmlFor="sort">
          Sort by:&nbsp;
          <select
            name="sort"
            id="sort"
            defaultValue={data.sort}
            form="someFormId"
            onChange={(e) => e.target.form?.requestSubmit()}
          >
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
        </label>
      </div>
    </div>
  );
}
