import { describe, expect, it } from "vitest";
import { isKebabCase } from "./index";

describe("isKebabCase", () => {
  it("should return true for valid kebab-case strings", () => {
    expect(isKebabCase("foo")).toBe(true);
    expect(isKebabCase("foo-bar")).toBe(true);
    expect(isKebabCase("foo-bar-baz")).toBe(true);
    expect(isKebabCase("a-b-c")).toBe(true);
    expect(isKebabCase("hello-world")).toBe(true);
  });

  it("should handle strings with numbers", () => {
    expect(isKebabCase("foo-123")).toBe(true);
    expect(isKebabCase("h1-heading")).toBe(true);
    expect(isKebabCase("level2")).toBe(true);
  });

  it("should return false for camelCase", () => {
    expect(isKebabCase("fooBar")).toBe(false);
    expect(isKebabCase("helloWorld")).toBe(false);
  });

  it("should return false for snake_case", () => {
    expect(isKebabCase("foo_bar")).toBe(false);
    expect(isKebabCase("hello_world")).toBe(false);
  });

  it("should return false for PascalCase", () => {
    expect(isKebabCase("FooBar")).toBe(false);
    expect(isKebabCase("HelloWorld")).toBe(false);
  });

  it("should return false for strings with spaces", () => {
    expect(isKebabCase("foo bar")).toBe(false);
    expect(isKebabCase(" foo-bar")).toBe(false);
    expect(isKebabCase("foo-bar ")).toBe(false);
  });

  it("should return false for strings with uppercase letters", () => {
    expect(isKebabCase("Foo-bar")).toBe(false);
    expect(isKebabCase("foo-Bar")).toBe(false);
    expect(isKebabCase("FOO-BAR")).toBe(false);
  });

  it("should return false for empty strings", () => {
    expect(isKebabCase("")).toBe(false);
  });

  it("should return false for strings starting or ending with hyphens", () => {
    expect(isKebabCase("-foo")).toBe(false);
    expect(isKebabCase("foo-")).toBe(false);
    expect(isKebabCase("-foo-bar-")).toBe(false);
  });

  it("should return false for strings with consecutive hyphens", () => {
    expect(isKebabCase("foo--bar")).toBe(false);
  });

  it("should return false for strings starting with numbers", () => {
    expect(isKebabCase("1foo")).toBe(false);
    expect(isKebabCase("123-bar")).toBe(false);
  });
});
