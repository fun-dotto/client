---
name: pr
description: 現在のブランチを push し、ベースブランチとの差分全体をもとに PR テンプレートに沿った日本語のタイトル・本文で Draft PR を作成する。「PR を作って」と頼まれたときに使う。
---

# PR 作成

## 手順

1. 状態を確認する。
   - `git status --porcelain=v1 -uall` で未コミットの差分がないことを確認する。あれば commit スキルで先にコミットする。
   - 現在のブランチが `main` の場合は、変更内容に合ったブランチを作成して切り替える。
2. ベースブランチ (既定 `main`) との差分全体を把握する。
   - `git fetch origin main`
   - `git log --oneline origin/main..HEAD`
   - `git diff origin/main...HEAD`
   - 直近のコミットだけでなく、ブランチ上のすべてのコミットを根拠にする。
3. `git push -u origin HEAD` で push する。
4. `.github/pull_request_template.md` を読み、その構成どおりに本文を書く。
   - テンプレートのセクションは不要でも削除しない。該当しない場合は「なし」と書く。
   - テンプレートの HTML コメントは記入の指示なので、本文には残さない。
   - 関連 Issue はブランチ名・コミットメッセージ・会話から特定できる場合のみ `Close #123` と書く。
   - テストは実際に追加・変更・削除したテストケースを書く。
   - スクリーンショットは画像を用意できない場合は空欄のままにし、ユーザーに追加を依頼する。
5. Draft PR を作成し、自分をアサインする。

   ```sh
   gh pr create --draft --base main --assignee @me --title "<タイトル>" --body-file - <<'EOF'
   <本文>
   EOF
   ```

6. 作成した PR の URL を報告する。

## タイトル

- 日本語で、何を変更したかを簡潔に書く (prefix は付けない)。

## 本文

- 日本語で書く。
- 末尾にはシステムから指示された attribution 行があれば付ける。

## 禁止事項

- `--force` での push は、ユーザーに指示されない限り行わない。
- Ready for review への変更やマージは行わない。
